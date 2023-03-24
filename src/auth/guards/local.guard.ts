import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const LocalGuard = () => UseGuards(AuthGuard('local'));
