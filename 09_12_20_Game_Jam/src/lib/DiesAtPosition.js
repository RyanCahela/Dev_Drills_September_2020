class DiesAtPosition {
  constructor(
    params = {
      positionToDie: { x: undefined, y: undefined },
      thingToMarkIsDead: {},
      moving: "left-to-right",
    }
  ) {
    const { positionToDie, thingToMarkIsDead, moving } = params;
    this.positionToDie = positionToDie;
    this.thingToMarkIsDead = thingToMarkIsDead;
    this.moving = moving;
  }

  checkIfDead(currentPosition = {}) {
    if (this.moving === "left-to-right") {
      if (currentPosition.x > this.positionToDie.x) {
        console.log("he's dead jim");
        this.thingToMarkIsDead.isDead = true;
      }

      if (currentPosition.y > this.positionToDie.y) {
        this.thingToMarkIsDead.isDead = true;
      }
    }

    if (this.moving === "right-to-left") {
      if (currentPosition.x < this.positionToDie.x) {
        console.log("he's dead jim");
        this.thingToMarkIsDead.isDead = true;
      }

      if (currentPosition.y < this.positionToDie.y) {
        this.thingToMarkIsDead.isDead = true;
      }
    }
  }
}

export default DiesAtPosition;
