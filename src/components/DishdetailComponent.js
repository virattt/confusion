import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText> 
                </CardBody>
            </Card>
        );
    };
    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="container">
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        return(
                            <ul className="list-unstyled" key={comment.id}>
                                <li key="comment">{comment.comment}</li>
                                <li key="author">-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric',month: 'long',day: '2-digit'}).format(new Date(comment.date))}</li>
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            )
        } else {
            return(<div></div>);
        }
    }
}

export default DishDetail;