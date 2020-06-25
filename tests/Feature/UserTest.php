<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase {
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUserApi() {
        $response = $this->json('GET', '/api/users', ['u' => 'sub1']);

        $response->assertStatus(200)
           ->assertJson([
               ["name" => "Tomasz", "surname" => "Kisiel", "u_card" => "123.123.123.1"],
               ["name" => "Adam", "surname" => "Nowak", "u_card" => "123.123.123.2"]
           ]);
    }
}
