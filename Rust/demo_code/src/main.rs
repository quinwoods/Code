fn main() {
    let mut x = 5;
    const MAX_POINTS: u32 = 100_000;
    println!("The value of x is {}", x);
    x = 6;
    println!("The value of x is {}", x);
    println!("The value of MAX_POINTS is {}", MAX_POINTS);
}