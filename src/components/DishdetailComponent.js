import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText> 
                    </CardBody>
                </Card>
            </div>
        );
    };
    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        return(
                            <ul className="list-unstyled" key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric',month: 'long',day: '2-digit'}).format(new Date(comment.date))}</p>
                            </ul>
                        )
                    })}
               </div>
            )
        } else {
            return(<div></div>);
        }
    };

    render() {
        const dish = this.props.dish
        
        if (dish != null) {
            return(
                <div className="container">
                    <div className="row">
                        {this.renderDish(dish)}
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            )
        } else {
            return(<div></div>);
        }
    }
}

export default DishDetail;