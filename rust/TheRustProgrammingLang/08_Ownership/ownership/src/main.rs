fn main() {
    println!("Ownership");

    // Heap Data

    let _s_ = "hello";
    let s_heap = String::from("hello");

    let s_heap_clone = s_heap.clone();
    let s_heap_two = s_heap_clone; // this var borrowed value from s_heap
    

    println!("s_heap_clone: {}", s_heap_two);
    println!("s_heap_twos: {}", s_heap_two);

    
    // Stack Only Data

    let x = 5;
    let y = x;

    println!("x: {}, y: {}", x, y);

    // Ownership and Functions

    let s = String::from("hello functions"); // s comes into scope

    take_ownership(s); // s's value moves into the function and is no longer valid here

    let x = 5; // x comes into scope

    make_copy(x); // x would move into the function, but i32 is Copy, so it’s okay to still use x afterward

    let s1 = gives_ownership(); // gives_ownership moves its return value into s1
    let s2 = String::from("hello"); // s2 comes into scope
    let s3 = takes_and_gives_back(s2); // s2 is moved into takes_and_gives_back, which also moves its return value into s3

    let (s4, len) = calculate_length(s3);
}

fn gives_ownership() -> String {
    let some_string = String::from("hello"); // some_string comes into scope

    some_string // some_string is returned and moves out to the calling function
}

fn take_ownership(some_string: String) { // some_string comes into scope
    println!("{}", some_string);
} // Here, some_string goes out of scope and `drop` is called. The backing memory is freed.

fn takes_and_gives_back(a_string: String) -> String { // a_string comes into scope
    a_string // a_string is returned and moves out to the calling function
} // Here, a_string goes out of scope and `drop` is called. The backing memory is freed.

fn make_copy(some_integer: i32) { // some_integer comes into scope
    println!("{}", some_integer); 
} // Here, some_integer goes out of scope. Nothing special happens.

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() returns the length of a String

    (s, length)
}