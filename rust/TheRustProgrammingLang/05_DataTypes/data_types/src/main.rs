
//https://doc.rust-lang.org/book/ch03-02-data-types.html

fn main() {

    // Floating points

    let x = 2.0; // 64-bit floating point, default float point type

    let y: f32 = 3.0; // 32-bit floating point  

    // Numeric Operations

    let sum = 5 + 10;

    let difference = 95.5 - 4.3;

    let product = 4 * 30;

    let quotient = 56.7 / 32.2;
    let floored = 2 / 3; // integer division, rounded down

    let remainder = 43 % 5;

    // Boolean

    let t = true;
    let f: bool = false; // with explicit type annotation

    // Character
    let c = 'z';
    let z = 'ℤ';
    let heart_eyed_cat = '😻';

    // Tuples
    let tup: (i32, f64, u8) = (500, 6.4, 1);

    let (x, y, z) = tup;

    let five_hundred = tup.0;
    let six_point_four = tup.1;
    let one = tup.2;

    println!("The value of y is: {}", y);
    println!("five_hundred: {}", five_hundred);

    // Arrays
    let a: [i32; 5] = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}
