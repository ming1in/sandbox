
fn another_function(x: i32) {
    println!("Another function.");
    println!("The value of x is: {}", x);
}

fn print_labeled_measurement(value: i32, unit_label: char) {
    println!("The measurement is: {}{}", value, unit_label);
}

fn five() -> i32 {
    5
}

fn plus_one(x: i32) -> i32 {
    x + 1
}

fn main() {
    println!("Hello, world!");

    // Functions
    another_function(27);

    print_labeled_measurement(5, 'h');

    // Statements and expressions

    let y = 6;

    let z = {
        let x = 3;
        x + y
    };

    println!("The value of z is: {}", z);

    // Functions with return values
    let f = five();

    let f = plus_one(f);

    println!("The value of f is: {}", f);
}
