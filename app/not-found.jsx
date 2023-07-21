import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="missing bordered">
      <h1 className="notfound">Object not found</h1>
      <p className="goback">are you in the right place?
        <br/>
        <a href="/">&#62; go back</a>
      </p>
    </div>
  );
}