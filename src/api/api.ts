export const GET_SEARCH_DATA_API = ({
                                        yearStart,
                                        yearEnd
                                    }: SearchAPIRequestParams) => {
    //TODO: Use from env file
    const REQUEST_URL = 'https://images-api.nasa.gov/search';

    return fetch(`${REQUEST_URL}?year_start=${yearStart}&year_end=${yearEnd}&media_type=image`).then((response) => response.json());
};

export type SearchAPIRequestParams = {
    yearStart: string;
    yearEnd: string;
}
