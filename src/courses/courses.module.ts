import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  imports: [CoursesService],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
