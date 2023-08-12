import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { Note } from 'src/note/entities/note.entity';

describe('NoteController (e2e)', ()=>{
    let app:INestApplication;

    beforeEach(async () =>{
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports:[AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

    })

    it('/notes (GET)', () =>{
        return request(app.getHttpServer())
        .get('/notes')
        .expect(200)
        .expect([]);
    })

    it ('/notes (POST)', () =>{
        const newNote: Note = { id: 1, content: 'Test Content' };
        return request(app.getHttpServer())
        .post('/notes')
        .send(newNote)
        .expect(201)
        .expect(newNote)
    })

})