import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub518Component} from "./stub518.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub518Component
        }])
    ],
    declarations: [
        Stub518Component
    ]
})
export class Stub518Module {

}
