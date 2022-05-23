#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

fn main() {
    let width1 = 30;
    let height1 = 50;

    let rec1 = (20, 50);

    let rec2 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("rec2 struct format one: {:?}", rec2);

    println!("rec2 struct format two: {:#?}", rec2);

    dbg!(&rec1);

    println!(
        "The area of the rectangle is {} square pixels.",
        area(width1, height1)
    );

    println!(
        "The area of the rectangle is {} square pixels.",
        area_tuples(rec1)
    );

    println!(
        "The area of the rectangle is {} square pixels.",
        area_struct(rec2)
    );
}

fn area(width: u32, height: u32) -> u32 {
    width * height
}

fn area_tuples(dimensions: (u32, u32)) -> u32 {
    dimensions.0 * dimensions.1
}

fn area_struct(rectangle: Rectangle) -> u32 {
    rectangle.width * rectangle.height
}
