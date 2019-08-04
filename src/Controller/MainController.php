<?php
namespace App\Controller;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
class MainController extends AbstractController{
	/**
	* @Route("/", name="index", methods={"GET"})
	*/
	public function index(){
		return $this->render('main/main.html.twig');
	}
}