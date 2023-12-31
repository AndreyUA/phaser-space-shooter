import { ScreenResolution } from "../../types/screenResolution";
import { HealthIndicator } from "./healthIndicator";

export let healthIndicator: HealthIndicator | null = null;

export function initHealthIndicator(this: Phaser.Scene): void {
  healthIndicator = new HealthIndicator({
    scene: this,
    x: ScreenResolution.WIDTH - 40,
    y: 10,
    width: 20,
    height: 100,
  });

  healthIndicator.update(1);
}
