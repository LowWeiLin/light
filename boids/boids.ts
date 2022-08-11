import * as THREE from "three";
import { Vector2 } from "three";

export type BoidOptions = {
  maxAcceleration: number;
  maxSpeed: number;
  epsilon: number;
  desiredSeparationRadius: number;
};

export const defaultBoidOptions: BoidOptions = {
  maxAcceleration: 9,
  maxSpeed: 9,
  epsilon: 1e-2,
  desiredSeparationRadius: 6,
};

export class Boid {
  options: BoidOptions;

  position: THREE.Vector2;

  velocity: THREE.Vector2;

  desiredPosition: THREE.Vector2;

  desiredVelocity: THREE.Vector2;

  acceleration: THREE.Vector2;

  constructor(
    position = new THREE.Vector2(0, 0),
    velocity = new THREE.Vector2(0, 0),
    boidOptions = defaultBoidOptions
  ) {
    this.options = boidOptions;
    this.position = position;
    this.velocity = velocity;
    this.acceleration = new THREE.Vector2(0, 0);
    this.desiredPosition = new THREE.Vector2().copy(this.position);
    this.desiredVelocity = new THREE.Vector2(0, 0);
  }

  run(
    delta: number,
    boids: Boid[],
    targetPosition?: THREE.Vector2,
    force?: THREE.Vector2
  ) {
    /**
     * Desired Velocity =
     *  Target
     * + Separation
     * + Alignment
     * + Cohesion
     */

    if (targetPosition) {
      this.desiredPosition.copy(targetPosition);
    } else {
      this.wander();
    }
    this.desiredVelocity.subVectors(this.desiredPosition, this.position);
    this.separation(boids);
    this.desiredVelocity.clampLength(0, this.options.maxSpeed);

    // External acceleration
    if (force) {
      this.acceleration.copy(force);
    }

    // Self acceleration
    const distToTarget = this.position.distanceTo(this.desiredPosition);
    if (distToTarget > this.options.epsilon) {
      this.acceleration.subVectors(this.desiredVelocity, this.velocity);
      this.acceleration.clampLength(0, this.options.maxAcceleration);
    }

    this.accelerate(delta);
    this.move(delta);
  }

  wander() {
    this.desiredPosition.copy(this.position);
  }

  separation(boids: Boid[]) {
    const temp = new Vector2();
    for (let i = 0; i < boids.length; i += 1) {
      const dist = this.position.distanceTo(boids[i].position);
      if (dist > 0 && dist < this.options.desiredSeparationRadius) {
        temp.subVectors(this.position, boids[i].position).normalize();
        this.desiredVelocity.addScaledVector(
          temp,
          (this.options.desiredSeparationRadius - dist) ** 2
        );
      }
    }
  }

  accelerate(delta: number) {
    this.velocity.addScaledVector(this.acceleration, delta);
    this.velocity.clampLength(0, this.options.maxSpeed);
  }

  move(delta: number) {
    this.position.addScaledVector(this.velocity, delta);
  }
}
