const ul = document.createElement('ul');
const li = document.createElement('li');
async function loadData(){
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();
	console.log(data);
	data.forEach(function (post){
		const li = document.createElement('li');
		li.innerText=post.title;
		ul.append(li);
	});
	document.body.append(ul);
	
}

loadData();