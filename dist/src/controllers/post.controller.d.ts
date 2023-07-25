import { PostService } from '../services/post.service';
import { Post as PostModel } from '../models/post.model';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(postData: Partial<PostModel>): Promise<PostModel>;
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
    update(id: string, postData: Partial<PostModel>): Promise<PostModel>;
    delete(id: string): Promise<PostModel>;
}
