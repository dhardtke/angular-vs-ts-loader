import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub952Component} from "./stub952.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub952Component
        }])
    ],
    declarations: [
        Stub952Component
    ]
})
export class Stub952Module {

}
