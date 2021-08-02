var faunadb = window.faunadb
var q = faunadb.query

let allComments = [];
let CommentBox = document.getElementById("Comments")

var serverClient = new faunadb.Client({
secret: 'fnAEKuqzuwACBcehmLnXpljSzUgdvfbS9e_MwlTv',
})
let allDocuments = serverClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("Comments"))),
      q.Lambda("X", q.Get(q.Var("X")))
    )
).then((ret) => {
  
  ret.data.forEach(element => {
    console.log(element.data.Show)
    CommentBox.innerHTML += '" ' + element.data.Text + ' "<br /><br />';
    if (element.data.Show == true) {
      CommentBox.innerHTML += "« " + element.data.Email + " »<br /><br /><br /><br />"
    }else{
      CommentBox.innerHTML += "Anonymous<br /><br /><br /><br />"
    }
    console.log(element)
  });

})//[0].data.


allComments.forEach(element => {
    console.log("shit")
});


// serverClient.query(
    
//   q.Get(q.Ref(q.Collection('Comments'), '301650416302555655'))
// )
// .then((ret) => console.log(ret.data.Text))
// .catch((err) => console.error('Error: %s', err))