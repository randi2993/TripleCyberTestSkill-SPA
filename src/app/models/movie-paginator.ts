import { Movie } from "./movies";

export class MoviePaginator {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}
