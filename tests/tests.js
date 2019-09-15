// Test that creating a new vector returns an object with the correct properties.
QUnit.test( "Vector constructor", function(assert) {
    const v = new Vector(-2, 0, 3.5); 
    assert.strictEqual(v.x, -2, "Vector x coordinate is correct");
    assert.strictEqual(v.y, 0, "Vector y coordinate is correct");
    assert.strictEqual(v.z, 3.5, "Vector z coordinate is correct");
});

QUnit.test( "Vector addition", function(assert) {
    const v1 = new Vector(-2, 0, 3.5);
    const v2 = new Vector(2, 4.4, 4.5);
    const v3 = v1.add(v2);
    assert.strictEqual(v1, v3, "V1 is returned");
    assert.propEqual(v1, { x: 0, y: 4.4, z: 8 }, "Vector 1 has been updated");
    assert.propEqual(v2, { x: 2, y: 4.4, z: 4.5 }, "Vector 2 has not been updated");
});

QUnit.test( "Vector subtraction", function(assert) {
    const v1 = new Vector(-2, 0, 3.5);
    const v2 = new Vector(2, 4.4, 4.5);
    const v3 = v1.sub(v2);
    assert.strictEqual(v1, v3, "V1 is returned");
    assert.propEqual(v1, { x: -4, y: -4.4, z: -1 }, "Vector 1 has been updated");
    assert.propEqual(v2, { x: 2, y: 4.4, z: 4.5 }, "Vector 2 has not been updated");
});

