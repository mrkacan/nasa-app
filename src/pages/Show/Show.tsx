import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getMediaDetail} from "../../features/medias/selectors";
import {Divider, Image, Tag} from "antd";
import {LeftCircleOutlined} from "@ant-design/icons";

const Show: React.FC = () => {
    const params = useParams()
    const media = useSelector(getMediaDetail(params.id))

    return (
        <div className="container h-screen">
            <Link to={"/"}>
                <LeftCircleOutlined className={"text-2xl py-6 cursor-pointer"}/>
            </Link>
            <Image width={"100%"} src={media.images[0]}/>
            <div>
                <div className="font-black text-2xl py-2">{media.title} </div>
                <div className="font-medium text-gray-700 text py-2">{`${media.location} - ${media.photographer}`}</div>
                <div>{media.description}</div>
                <Divider/>
                <div>{media.keywords.map(tag => <Tag color="geekblue">{tag}</Tag>
                )}</div>
                <Divider/>
            </div>
        </div>
    );
}

export default Show;
