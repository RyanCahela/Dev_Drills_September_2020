import Container from "../lib/Container";
import Bullet from "./Bullet";

class BulletContainer extends Container {
  constructor(constrainX, constrainY) {
    super();
    this.constrainX = constrainX;
    this.constrainY = constrainY;
  }
}

export default BulletContainer;
