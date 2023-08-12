import { Post, Body, Get, Controller } from '@nestjs/common';
import { Note } from '../entities/note.entity';

@Controller('notes')
export class NoteController {
    private notes: Note[] = [];

    @Get()
    getAllNotes(): Note[]{
        return this.notes
    }

    @Post()
    createNote(@Body() note: Note): Note {
        this.notes.push(note)
        return note;
    }
}


