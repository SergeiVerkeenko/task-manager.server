import request from "supertest";
import app from '../../app'
import { iTask, iUser } from "../../interfaces/interfaces";

const endPointUrlUser = '/user/';

let user: iUser;
describe(`USER  ${endPointUrlUser}`, () => {
