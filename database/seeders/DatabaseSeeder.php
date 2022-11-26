<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use app\usuarios;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('administrador')->insert([
            'rut_admin' => 'admin123',
            'contrasena' => Hash::make('admin'),
            'nombre' => 'Super',
            'apellido_pat' => 'Admin',
            'apellido_mat' => 'Test',
            'tipo_admin' => 'Administrador'
        ]);

        DB::table('users')->insert([
            'name' => 'Super',
            'email' => 'administrador@gmail.cl',
            'password' => Hash::make('admin')
        ]);
    }
}
