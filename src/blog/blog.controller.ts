import {Body, Controller, Get, Logger, Post} from '@nestjs/common';
import {BlogDto} from "./blog.dto";
import {BlogService} from "./blog.service";

@Controller('blog')
export class BlogController {

    private  readonly logger = new Logger(BlogController.name);
    constructor(private readonly blogsService: BlogService) {
    }

    @Get()
    blogs(): BlogDto[]{
        return this.blogsService.getBlogs();
    }

    @Post()

    create(@Body() blog: BlogDto): void {
        this.logger.log('create');
    }
}
