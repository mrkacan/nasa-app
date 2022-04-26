import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DatePicker, Divider, Image, List} from 'antd';
import * as mediaAction from "../../features/medias/actions";
import moment, {Moment} from "moment";
import {getMediasSelector} from "../../features/medias/selectors";
import {Link} from 'react-router-dom';

const {RangePicker} = DatePicker;

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const {
        data,
        isLoading,
        error
    } = useSelector(getMediasSelector)

    const onCalendarChange = (dates: Moment[]) => {
        const yearStart = dates?.[0] ? moment(dates[0]).format("YYYY") : ""
        const yearEnd = dates?.[1] ? moment(dates[1]).format("YYYY") : ""
        if (yearStart && yearEnd) {
            dispatch(mediaAction.getMedias(yearStart, yearEnd));
        }
    }
    return (
        <div className="container h-screen text-center pt-8">
            <div>
                <RangePicker picker="year" bordered={true} onCalendarChange={onCalendarChange}/>
            </div>
            <Divider/>
            <List
                loading={isLoading}
                bordered
                dataSource={data}
                renderItem={item => (
                    <Link to={`show/${item.nasa_id}`}>
                        <div className="flex flex-row items-start p-4">
                            <Image src={item.images[4]} width={100}/>
                            <div className="text-left pl-4">
                                <h6 className="">{item.title}</h6>
                                <div
                                    className="text-gray-500">{`${item.location} - ${item.photographer}`}</div>
                            </div>
                        </div>
                        <Divider/>
                    </Link>
                )}
            />
        </div>
    );
}

export default Search;
