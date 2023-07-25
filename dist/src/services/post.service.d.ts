import { Model } from 'mongoose';
import { Post, PostDocument } from '../models/post.model';
export declare class PostService {
    private postModel;
    constructor(postModel: Model<PostDocument>);
    create(postData: Partial<Post>): Promise<Post>;
    findAll(): Promise<Post[]>;
    findById(id: string): Promise<Post>;
    update(id: string, updateData: Partial<Post>): Promise<Post>;
    delete(id: string): Promise<Post>;
}
