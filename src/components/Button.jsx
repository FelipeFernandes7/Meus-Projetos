import '../styles/home.css'
export function Button(HTMLButtonElement){
  
    return(
        <button className="button" {...HTMLButtonElement}/>
    );
}