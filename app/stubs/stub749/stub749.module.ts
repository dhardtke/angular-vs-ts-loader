import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub749Component} from "./stub749.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub749Component
        }])
    ],
    declarations: [
        Stub749Component
    ]
})
export class Stub749Module {

}
