import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';

@ApiTags('roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Создать новую роль' })
  @ApiResponse({ status: 201, description: 'Роль успешно создана', type: Role })
  @ApiResponse({ status: 400, description: 'Неверные данные' })
  @ApiBody({ type: CreateRoleDto })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Получить роль по значению' })
  @ApiResponse({ status: 200, description: 'Роль найдена', type: Role })
  @ApiResponse({ status: 404, description: 'Роль не найдена' })
  @ApiParam({ name: 'value', required: true, description: 'Значение роли', type: String })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
