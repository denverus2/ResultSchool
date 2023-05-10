let a = 1
function foo() {
  a = 2
  console.log(a)
  return 10
}
console.log(a)
a = a + foo()
console.log(a)
a = a + foo()
console.log(a)