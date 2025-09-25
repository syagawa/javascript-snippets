// from
// {abc: "abc", def: 123}
// to
// {
//   abc: "abc",
//   def: 123
// }
(async function(){
  const s1 = await navigator.clipboard.readText();
  const o = JSON.parse(s1);
  const s = JSON.stringify(o, null, 2);
  navigator.clipboard.writeText(s);
})();
