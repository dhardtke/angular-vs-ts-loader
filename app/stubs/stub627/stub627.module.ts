import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub627Component} from "./stub627.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub627Component
        }])
    ],
    declarations: [
        Stub627Component
    ]
})
export class Stub627Module {

}
