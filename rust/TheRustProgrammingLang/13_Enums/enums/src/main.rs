enum IpAddrKind {
    V4,
    V6,
}

enum EIpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

struct IpAddr {
    kind: IpAddrKind,
    address: String,
}

fn route(ip_kind: IpAddrKind) {}

fn main() {
    println!("Hello, Enums!");

    let four = IpAddrKind::V4;
    let six = IpAddrKind::V6;

    let home = IpAddr {
        kind: IpAddrKind::V4,
        address: String::from("127.0.0.1"),
    };

    let loopback = IpAddr {
        kind: IpAddrKind::V6,
        address: String::from("::1"),
    };

    // placing data into enum is sometimes more concise
    // than using a enum inside a struct
    let home = EIpAddr::V4(127, 0, 0, 1);
    let loopback = EIpAddr::V6(String::from("::1"));
}
