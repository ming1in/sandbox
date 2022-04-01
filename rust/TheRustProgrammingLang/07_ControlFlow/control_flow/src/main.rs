//https://doc.rust-lang.org/book/ch03-05-control-flow.html
fn main() {

    // If statements

    let num = 3;

    if num < 5 {
        println!("condition was true");
    } else {
        println!("condition was false");
    }

    if num != 0 {
        println!("number was something other than zero");
    }

    if num % 4 == 0 {
        println!("number is divisible by 4");
    } else if num % 3 == 0 {
        println!("number is divisible by 3");
    } else if num % 2 == 0 {
        println!("number is divisible by 2");
    } else {
        println!("number is not divisible by 4, 3, or 2");
    }

    let cond_num = if num < 0 {-1} else {0};

    println!("cond_num: {}", cond_num);

    // Repeating Code with Loops

    let mut count = 0;

    'counting_loop: loop {
        println!("count: {}", count);
        count += 1;
        
        if count == 10 {
            break 'counting_loop;
        }
    }

    // Returning Values from Loops

    let mut counter_two = 0;

    let result = loop {
        counter_two += 1;

        if counter_two == 10 {
            break counter_two * 2; // this is where the return value is set
        }
    };

    println!("The result is {}", result);


    // While Loops

    let mut number = 3;

    while number != 0 {
        println!("{}!", number);

        number -= 1;
    }

    println!("LIFTOFF!!!");

    let a = [10, 20, 30, 40, 50];

    a.iter().for_each(|x| println!("the value is: {}", x));

    for element in a.iter() {
        println!("the value is: {}", element);
    }
}
