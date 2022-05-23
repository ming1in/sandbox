//https://doc.rust-lang.org/book/ch06-02-match.html

#[derive(Debug)]
enum UsState {
    Alabama,
    Alaska,
}

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(UsState),
}

// trivial demo of pattern matching and data extracting
fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => {
            println!("Lucky penny!");
            1
        }
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {:?}!", state);
            25
        }
    }
}

// pattern matching against types
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,
        Some(i) => Some(i + 1),
    }
}

fn main() {
    println!("Hello, Matching!");

    let dime = Coin::Dime;
    let quarter = Coin::Quarter(UsState::Alaska);
    let _value = value_in_cents(dime);
    let quarter_value = value_in_cents(quarter);

    println!("quarter_value: {}", quarter_value);

    let five = Some(5);
    let _six = plus_one(five);
    let _none = plus_one(None);

    // Exhaustive matching

    let dice_roll = 9;

    fn add_fancy_hat() {}
    fn remove_fancy_hat() {}
    fn reroll() {
        println!("Rerolling!");
    }

    match dice_roll {
        3 => add_fancy_hat(),
        7 => remove_fancy_hat(),
        _ => reroll(),
    }
}
