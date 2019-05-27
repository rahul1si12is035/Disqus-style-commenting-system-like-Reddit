
/*** Imports ***/

/* Library imports */
import React,{Component} from "react";
import PropTypes from 'prop-types';

/* Component imports */

/* Style imports */
import './styles.css';

/*** End Imports ***/

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            showTextArea: false,
            textAreaValue: ''
        };
        this.trackedList = []
    }

    componentWillMount(){

    }
    componentDidMount(){

    }

    // Server calls

    // helper function

    // listeners

    onClickReply = () => {
        this.setState({
            showTextArea: true
        });
    };

    onChangeTextAreaValue = (event) => {
        this.setState({
            textAreaValue: event.target.value
        });
    };

    onClickSendReply = (event) => {
        const {superIndex, commentId} = this.props;
        const {textAreaValue} = this.state;
        event.preventDefault();
        this.props.addComment(textAreaValue, superIndex, commentId);
        this.setState({
            textAreaValue: '',
            showTextArea: false
        });
    }

    // views to be rendered



    //finally render
    render(){
        const {showTextArea, textAreaValue} = this.state;
        const {comment, superIndex, addComment} = this.props;

        let childnodes = null;

        if(this.props.children) {    
            childnodes = this.props.children.map((childnode, index) => {
                return(
                    <Comment 
                        key = {index} 
                        comment = {childnode} 
                        commentId = {childnode.commentId}
                        children = {childnode.subCommentsList}
                        addComment = {addComment}
                    />
                )
            })
        };
      
        return (
            <div className="comment-wrapper">
                <div className="cw-left">
                    <img src={comment.imagUrl} />
                </div>
                <div className="cw-right">
                    <div className="cwr-name-date">
                        <div className="cwr-name">{comment.userName}</div>
                        <div className="cwr-date light-color">{comment.timeOfComment}</div>
                    </div>
                    <div>
                        <div>{comment.comment}</div>
                    </div>
                    <div className="light-color cwr-reply" onClick={this.onClickReply}>Reply</div>
                    {
                        showTextArea ?
                        <div className="reply-text-area">
                            <textarea value={textAreaValue} onChange={this.onChangeTextAreaValue} />
                            <button onClick={this.onClickSendReply}>Send Reply</button>
                        </div>
                        :
                        null
                    }
                    { 
                        childnodes ?
                            childnodes
                            : 
                            null 
                    }
                    
                </div>              
                
            </div>
        )
    }

}

/**
 * all prop types which can be passed to this component
 */
Comment.propTypes ={

};

/**
 * Only if default initialization is required
 * Default props value for this component
 */
Comment.defaultProps ={

};

export default Comment;