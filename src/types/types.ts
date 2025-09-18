export interface PostItem {
	_id: string;
	user_id: string;
	type: "posts";
	attributes: {
		trends: boolean;
		category: string[];
		tags: string[];
		authors: string[];
		title: string;
		slug: string;
		content: string;
		img: string;
		seo: Record<string, any>;
		desc: string;
	};
	lang: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export type PostsResponse = PostItem[];
