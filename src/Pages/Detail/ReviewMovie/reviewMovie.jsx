import React from 'react';
import './reviewMovie.scss';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';


const ReviewMovie = () => {
    return (
        <div className="reviewContent">
            <div className="newComment d-flex">
                <Grid container spacing={1}>
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Bạn nghĩ gì về phim này ?" />
                    </Grid>
                </Grid>
                <Rating name="size-medium" defaultValue={3} />
            </div>
            <div className="listComment">
                <div className="itemComment">
                    <div className="headComment d-flex">
                        <div className="infoUser d-flex">
                            <Avatar /><span>Nguyễn Văn A</span>                           
                        </div>
                        <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                    </div>
                    <p>Mình là 1 người khó tánh trong chọn phim, phần 1 mình có xem nội dung ổn hơn phần này. Phần này nội dung 3đ vù chả có gì để xem, ngoài mấy pha đánh đam kĩ xão 7đ. Nói chung ko đáng để coi vì nhiều phim khác hay hơn, phim này xem hơi phí tiền.</p>
                </div>
                <div className="itemComment">
                    <div className="headComment d-flex">
                        <div className="infoUser d-flex">
                            <Avatar /><span>Nguyễn Thị B</span>                           
                        </div>
                        <Rating name="half-rating-read" defaultValue={1.5} precision={0.5} readOnly />
                    </div>
                    <p>Film không có tí nội dung nào cả, nhạt nhẽo</p>
                </div>
                <div className="itemComment">
                    <div className="headComment d-flex">
                        <div className="infoUser d-flex">
                            <Avatar /><span>Trần Bá</span>                           
                        </div>
                        <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                    </div>
                    <p>Phim rất hay và ý nghĩa, đáng để ra rạp xem</p>
                </div>
                <div className="itemComment">
                    <div className="headComment d-flex">
                        <div className="infoUser d-flex">
                            <Avatar /><span>Nguyễn Văn A</span>                           
                        </div>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </div>
                    <p>Mình là 1 người khó tánh trong chọn phim, phần 1 mình có xem nội dung ổn hơn phần này. Phần này nội dung 3đ vù chả có gì để xem, ngoài mấy pha đánh đam kĩ xão 7đ. Nói chung ko đáng để coi vì nhiều phim khác hay hơn, phim này xem hơi phí tiền.</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewMovie;
