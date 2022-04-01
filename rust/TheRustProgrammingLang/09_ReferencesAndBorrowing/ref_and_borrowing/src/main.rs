fn main() {
    let mut s1 = String::from("hello");

    let len = calculate_length(&s1);

    println!("The length of '{}' is {}.", s1, len);

    change(&mut s1); // &mut, denotes a mutable reference

    {
        let r1 = &mut s1; // there can only be one mutable reference to a particular piece of data in a particular scope
        println!("r1: {}", r1);
    }

    let r2 = &mut s1;;
    println!("r2: {}", r2);

    // we cannot have a mutable ref and a immutable ref at the same time
    let mut s = String::from("yerrr");

    let r1 = &s; // no problem
    let r2 = &s; // no problem
    println!("{} and {}", r1, r2);
    // variables r1 and r2 will not be in scope after this point

    let r3 = &mut s; // no problem
    println!("{}", r3);

    // Dangling References - a pointer that references a location in memory that may have been given to someone else
    // dangling references are bads
    let reference_to_nothing = dangle();
}

fn calculate_length(s: &String) -> usize {
    s.len()
} // Here, s goes out of scope. But because it does not have ownership of what
  // it refers to, nothing happens.

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}

fn dangle() -> String {
    let s = String::from("hello");

    s 
} 

