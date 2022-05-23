#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

#[derive(Debug)]
struct RightTriangle {
    a: u32,
    b: u32,
    c: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        // &self(for reading), borrows selfs immutably and receives a reference
        self.width * self.height
    }

    fn double_width(&mut self) {
        // &mut self(for mutating), borrows selfs mutably and receives a reference
        self.width = self.width * 2
    }

    fn slice_triangles(self) -> RightTriangle {
        // self(for consuming), taking ownership of self
        RightTriangle {
            a: self.height,
            b: self.width,
            c: self.height,
        }
    }

    // methods and attributes can have same names
    fn _width(&self) -> bool {
        self.width > 0
    }

    fn can_hold(&self, other_rect: &Rectangle) -> bool {
        self.width > other_rect.width && self.height > other_rect.height
    }

    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}

fn main() {
    println!("Hello, Methods!");

    let mut rec1 = Rectangle {
        width: 30,
        height: 50,
    };

    println!("{:?}", rec1);

    println!("rect1 area: {}", rec1.area());

    rec1.double_width();

    println!("{:?}", rec1);

    let triangle = rec1.slice_triangles();

    println!("Triangle: {:?}", triangle);

    // Methods with More Parameters
    let rect1 = Rectangle {
        width: 30,
        height: 50,
    };
    let rect2 = Rectangle {
        width: 10,
        height: 40,
    };
    let rect3 = Rectangle {
        width: 60,
        height: 45,
    };
    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));
    println!("Can rect1 hold rect3? {}", rect1.can_hold(&rect3));

    // Associated Functions
    let sq = Rectangle::square(3);
}
