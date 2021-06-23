interface BlogPostProps {
	title: string;
	date: string;
	//image: string;
	body: string;
	author: string;
}
function BlogPost (props:BlogPostProps):JSX.Element {
	return (
		<div> 
		<h1>{props.title}</h1>	
		<h2>{props.date}</h2>
		<p>{props.body}</p>
		<h3>{props.author}</h3>
		</div>
	)
}
export default BlogPost;