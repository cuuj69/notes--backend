import { Module } from '@nestjs/common';
import { NoteController } from './note/controllers/note.controller';

@Module({
  imports: [],
  controllers: [NoteController],
  providers: [],
})
export class AppModule {}
