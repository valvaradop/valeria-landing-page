const Card = (props) => {
    return (
        <div className="card">
            
            <div className="d-flex justify-content-center mt-3">
                <img 
                    src={props.img} 
                    className="image"
              
                />
            </div>

            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card