import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub133Component} from "./stub133.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub133Component
        }])
    ],
    declarations: [
        Stub133Component
    ]
})
export class Stub133Module {

}
