//Vector
class Vector {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    sub(vector) {
        this.x = this.x - vector.x
        this.y = this.y - vector.y
        this.z = this.z - vector.z

        return this
    }

    add(vector) {
        this.x = this.x + vector.x
        this.y = this.y + vector.y
        this.z = this.z + vector.z

        return this
    }

    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    cross(vector) {
        return new Vector(
            this.y * vector.z - this.z * vector.y,
            this.z * vector.x - this.x * vector.z,
            this.x * vector.y - this.y * vector.x
        )
    }

    toUnitVector() {
        var magnitude = Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z )
        return new Vector(
            this.x / magnitude,
            this.y / magnitude,
            this.z / magnitude
        )
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y  + this.z * this.z)
    }

    asString() {
        return this.x + "i + " + this.y + "j + " + this.z + "k"
    }

    mult(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;

        return new Vector(this.x, this.y, this.z)
    } 

    div(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;

        return new Vector(this.x, this.y, this.z)
    }
}
