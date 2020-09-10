create table cliente (cedula_cliente character(15)primary key, nombre character(100), apellido character(100), telefono character(20), direccion character(200));

alter table cliente add column correo_electronico character(100);
alter table cliente add column contraseña character(100)

create table alquiler_bicicleta (id_alquiler_bicicleta serial primary key, hora_alquiler character(25), hora_dev character(25), cedula_cliente character(15), id_bicicleta integer, cedula_empleado character(15));
create table bicicleta (id_bicicleta serial primary key, estado bool, tipo_bicicleta character(100));
alter table bicicleta add column caracteristicas character(1000)

create table empleados (cedula_empleado character(15) primary key, nombre character(100), apellido character(100), telefono character(20), id_local integer);
create table locals (id_local serial primary key, nombre character(100), telefono character(20), direccion character(200));

alter table alquiler_bicicleta add constraint fk_cliente foreign key (cedula_cliente) references cliente(cedula_cliente)
alter table alquiler_bicicleta add constraint fk_bicicleta foreign key (id_bicicleta) references bicicleta(id_bicicleta);
alter table alquiler_bicicleta add constraint fk_empleados foreign key (cedula_empleado) references empleados(cedula_empleado);

alter table empleados add constraint fk_locals foreign key (id_local) references locals(id_local);
alter table cliente drop contraseña;
alter table cliente add column cedula character(20)