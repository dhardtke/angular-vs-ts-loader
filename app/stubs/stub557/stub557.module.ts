import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub557Component} from "./stub557.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub557Component
        }])
    ],
    declarations: [
        Stub557Component
    ]
})
export class Stub557Module {

}
